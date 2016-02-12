For the moment it's a primitive mixin which allows you to queue and unqueue objects. For example to keep pending messages in a chat.

```javascript
import q from "react-mixin-q"
const App = React.createClass({
  mixins:[ q ],
  ...
)}
```

The queue is array at `this.q`.

Usage:
```
this.q.add( el );
this.q.del( el );
```
