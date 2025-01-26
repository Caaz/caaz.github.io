class StoryNode:
  """ This is a Tree node, essentially. It holds the text of the story, and the story parts after it, as well as the choices required to get to them. """
  def __init__(self, prompt:str, options:dict):
    """
    prompt is the text we present to the user
    options is a dict, where the key is the choice the user must answer with, and the value is the next story object it leads to.
    """
    self.prompt = prompt
    options["EXIT"] = "Bye!"
    self.options = {key.upper(): options[key] for key in options.keys()}

  def get_next(self):
    choices = self.options.keys()
    choice_string = f"Choices: {', '.join(choices)}"

    while True:
      # Get the user's input, while presenting the prompt
      user_input = input(f"{self.prompt}\n{choice_string}\n").upper()
      # if it's valid, return the next story part
      if user_input in choices:
        return self.options[user_input]
      # otherwise complain at them
      else:
        print(f"Invalid input.")


story = StoryNode("Want to play a game?", {
  "no":"well fine",
  "yes":StoryNode("It was a dark and stormy night...\nYou get the point.", {
    "okay":"Yeah this is just a proof of concept."
  })
})


while True:
  story = story.get_next()

  # If we don't get a story object back, assume the game is over.
  if type(story) is str:
    print(story)
    exit()
