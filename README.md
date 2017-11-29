# React reuse patters        

This repository contains examples used for Wix Engineering meetup       
[Link to meetup](https://www.meetup.com/at-wix/events/244861816/)


The app was created using [create-react-app](https://github.com/facebookincubator/create-react-app)          
React components used in the examples:           
* [react-table](https://github.com/react-tools/react-table)       
* [react-tagsinput](https://github.com/olahol/react-tagsinput)


The directories are divided according to the presentation phases, each contains a MainView component.                  
To render the relevant part, switch the import of MainView in App.js        
The parts are:

* No reuse
* Simple composition
* Repackaging with composition
* Repackaging with HOC
* HOC communication with inner component (withState example)
* Render callback - Dynamic communication with inner component (withState example)

