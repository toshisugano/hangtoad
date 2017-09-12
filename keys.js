/*React keys are useful when working with dynamically created components or when your lists are altered by users.
 Setting the key value will keep your components uniquely identified after the change. Using Keys

Let's dynamically create Content elements with unique index (i). The map function will create three elements from our 
data array. Since key value needs to be unique for every element, we will assign i as a key for each created element.
App.jsx */

import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               component: 'First...',
               id: 1
            },
				
            {
               component: 'Second...',
               id: 2
            },
				
            {
               component: 'Third...',
               id: 3
            }
         ]
      }

   }

   render() {
      return (
         <div>
            <div>
               {this.state.data.map((obj, i) => <Content 
                  key = {i} data = {obj}/>)}
            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.data.component}</div>
            <div>{this.props.data.id}</div>
         </div>
      );
   }
}

export default App;