You are a senior web developer and I want you to code a simple webapp called "Text Reverser"

###  User Specs
#### As a user I want to introduce a text and get the result in reverse order
##### Acceptance Criteria
- Given that I introduced text in the form, when I click the "Reverse" button then the text is reversed
- Given that there is text introduced in the form, when I click the "Bin" icon, then the text is erased and reversed text is hidden
- Given that there is no text introduced in the form, then the "Reverse" and the "Bin"  are not clicable, and reversed text is hidden
##### UX
- Text input form has a max of 100 chars, there is a counter with the remainig chars in the form (12/100) below of the input box aligned to the left
- Input form is multiline

#### As a user I want to get the reversed text copied in the clipboard
##### Acceptance Criteria
- Given that there is text reversed, when I click the "Copy" button, then the reversed text is copied to the clipboard, a temporary message is displayed to the user informing the action

##### UX
- The temporary message is placed below of the reversed text

### UX Specs
- Use UX best practices
- Use attached image as reference

### Technical Specs
- Language is javascript. Separate in different files index.html and script.js
- Use tailwind css
- Document the code
- Create unit tests in a different file

### Other
- Show title of the app in the form
- Create a readme.md containing the webapp instructions and your AI model and version
