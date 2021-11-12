import logo from './logo.svg';
import './App.css';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    

    <div className="App">
      
      <Button
  title="Solid Button"
/>

<Button
  title="Outline button"
  type="outline"
/>

<Button
  title="Clear button"
  type="clear"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

<Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Button with right icon"
/>

<Button
  title="Loading button"
  loading
/>

    </div>

  );
}

export default App;
