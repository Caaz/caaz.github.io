import gdscript from 'highlightjs-gdscript/src/index.js';
import DOMPurify from 'dompurify/dist/purify.min.js';

function parse_comment(comment) {
  console.log(comment);
  const author = comment.post.author;
  let content = comment.post.record.text;
  const createdAt = new Date(comment.post.record.createdAt).toLocaleString();
  
  // Validate counts, ensure they are numbers
  const replyCount = Number(comment.post.replyCount) || 0;
  const repostCount = Number(comment.post.repostCount) || 0;
  const likeCount = Number(comment.post.likeCount) || 0;
  
  // Process facets to embed links and mentions
  const facets = comment.post.record.facets || [];
  facets.sort((a, b) => a.index.byteStart - b.index.byteStart); // Ensure facets are in order

  let offset = 0;
  facets.forEach(facet => {
    const start = facet.index.byteStart + offset;
    const end = facet.index.byteEnd + offset;
    const originalText = content.slice(start, end);
    let replacementText = originalText;
    
    facet.features.forEach(feature => {
      if (feature.$type === 'app.bsky.richtext.facet#link') {
        replacementText = `<a href="${feature.uri}" target="_blank" rel="noopener noreferrer">${originalText}</a>`;
      } else if (feature.$type === 'app.bsky.richtext.facet#mention') {
        replacementText = `<a href="https://bsky.app/profile/${feature.did}" target="_blank" rel="noopener noreferrer">${originalText}</a>`;
      }
    });
    content = content.slice(0, start) + replacementText + content.slice(end);
    offset += replacementText.length - originalText.length;
  });
  const safeContent = DOMPurify.sanitize(content); // Sanitize the content
  return {
    author: author,
    created_at: createdAt,
    content: safeContent,
    reply_count: replyCount,
    like_count: likeCount,
    repost_count: repostCount,
    replies: comment.replies
  }
}
function render_comment(comment) {
  const data = parse_comment(comment);
  var html = 
  `<article class="uk-comment" role="comment">
    <header class="uk-comment-header">
      <div class="uk-grid-medium uk-flex-middle uk-grid-small" uk-grid>
        <div class="uk-width-auto">
          <img class="uk-comment-avatar uk-border-circle" width="40" height="40" src="${data.author.avatar}" alt="${data.author.displayName}'s avatar">
        </div>
        <div class="uk-width-expand">
          <h4 class="uk-comment-title"> <a href="https://bsky.app/profile/${data.author.did}" target="_blank" class="uk-link-heading">${data.author.displayName}</a></h4>
          <ul class="uk-comment-meta uk-subnav uk-subnav-divider">
              <li>@${data.author.handle}</li>
              <li>${data.created_at}</li>
              <li><span uk-icon="icon: heart;ratio:.75" class="uk-margin-small-right"></span>${data.like_count}</li>
              <li><span uk-icon="icon: comments;ratio:.75" class="uk-margin-small-right"></span>${data.reply_count}</li>
          </ul>
        </div>
      </div>
    </header>
    <div class="uk-comment-body">${data.content}</div>
  </article>`;
  if (data.replies && data.replies.length > 0) {
    html += `<ul>`;
    data.replies.forEach(reply => {
      html += `<li>${render_comment(reply)}</li>`;
    });
    html += `</ul>`;
  }
  return html
}
function render_bluesky_comments() {
  const comment_container = document.getElementById('bluesky-comments');
  if (comment_container == null) {
    return
  }
  fetch(`https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://${comment_container.dataset.username}/app.bsky.feed.post/${comment_container.dataset.post}&depth=10`)
  .then(response => response.json())
  .then(data => {
    var html = ""
    const replies = data.thread.replies || []
    replies.sort((a, b) => new Date(a.post.record.createdAt) - new Date(b.post.record.createdAt));
    replies.forEach(comment => {
      html += `<li>${render_comment(comment)}</li>`;
    });
    comment_container.innerHTML = html;
  })
}

docReady(() => {
  hljs.registerLanguage("gdscript", gdscript);
  hljs.highlightAll();
  // check if templates are supported
  render_bluesky_comments()
})

