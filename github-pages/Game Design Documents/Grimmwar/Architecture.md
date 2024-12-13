# Classes
## Epic
The epic holds a list of states of the battle, The ui reads from this object to display visuals. The epic can be modified at any time, and the ui should update to reflect the latest changes.


| Property    | Type        | Description                                                                  |
| ----------- | ----------- | ---------------------------------------------------------------------------- |
| state       | State       | the current state of the game, the UI should use this value to render the UI |
| story_beats | Array[Beat] | The beats of the story                                                       |

| Method        | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| resolve_state | Steps through every step of the story and sets the current state |
## Beat
A story beat, these are like git commits

| Property | Type                              | Description                                              |
| -------- | --------------------------------- | -------------------------------------------------------- |
| effect   | Callable(targets:Array) -> String | The code this card executed to create the beat           |
| target   | Target                            | The target this effect targets                           |
| cache    | State                             | The last calculated state when this beat was applied     |
| text     | String                            | The text returned from the effect callable, user facing. |
### Enums
**Target**
- CHARACTER_P1_1
- CHARACTER_P1_2
- CHARACTER_P2_1
- CHARACTER_P2_2
- ALL_CHARACTERS
- P1_CHARACTERS
- P2_CHARACTERS
### Subclasses
#### CardBeat
A subclass of Beat, when added from card, should hold card information
## State

| Property      | Type    | Description                      |
| ------------- | ------- | -------------------------------- |
| player_states | Array[] | The two players' states          |
| card_played   | Card    | The card that created this state |
## PlayerState

| Property | Type             | Description   |
| -------- | ---------------- | ------------- |
| health   | int              | Player Health |
| units    | Array[UnitState] | The two units |
## UnitState

| Property | Type | Description         |
| -------- | ---- | ------------------- |
| health   | int  | Current unit health |
| attack   | int  | Current unit attack |
|          |      |                     |
