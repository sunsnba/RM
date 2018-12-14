# Instructions

***PLEASE READ ENTIRE README FOR DETAILS***

Navigate to the rm directory
``` 
cd rm
```

From the rm directory

```

npm start

Go to http://localhost:3000/ 

# JSON string provided

The JSON string that was provided was not a JSON string. It was a JSON object, but was missing a comma after the 'contentA' value. I added the comma and converted the JOSN object into a JSON string and placed it in another file called JSONString.js I then parsed it in Board.js


# Multiple Rendering of the component in #1

It was clear that the component from #1 needed to be rendered multiple times. They all behave independently, holding their own state. The way I rendered them is from the App component.

I managed to do all of this in react because the state is pretty simple. If it were to become more complicated I would revise to use redux.
