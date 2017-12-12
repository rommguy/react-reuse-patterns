# React reuse patters        

This repository contains examples used for Wix Engineering meetup       
[Link to meetup](https://www.meetup.com/at-wix/events/244861816/)       
[Link to slides](https://docs.google.com/presentation/d/1jxHhiZELbMh1YvvXhB1YIaovyUbsc8abTy54PriLh4o/edit?usp=sharing)       
[Video in Youtube](https://www.youtube.com/watch?v=0BNgi9vofaw&t=1393s)

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

