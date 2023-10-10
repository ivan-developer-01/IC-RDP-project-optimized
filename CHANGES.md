# What I have changed
## IC-RDP-project
 - Removed debug code in style.css
 - Applied the DRY principle
   - Created the --full-white-color variable and applied it in the style.css and in the mobile.css
   - Changed the index.html, style.css, and mobile.css according to the DRY principle
 - Applied the KISS principle
   - Replaced fragments like this
     ```css
	 margin-top: 44px;
	 margin-bottom: 50px;
	 ```  
	 to
	 ```css
	 margin: 44px auto 50px;
	 ```
   - Did the same with the `padding` property