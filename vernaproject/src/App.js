import {Bar} from "../src/Component/navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import PlanPricingScreen from './Screens/PlanPricingScreen';
import FAQScreen from './Screens/FAQScreen';
import ContactScreen from './Screens/ContactScreen';
import ErrorScreen from './Screens/ErrorScreen';


function App() {

  
  
  return (   
          <div>
            <header>
                 <Bar />
            </header>

            <main>
              <BrowserRouter>
              <Routes>
                 <Route exact path="/" element={<HomeScreen/>}/> 
                 <Route exact path="/plan"element={<PlanPricingScreen/>}/> 
                 <Route exact  path="/faq" element={<FAQScreen/>}/> 
                 <Route exact path="/contact" element={<ContactScreen/>}/> 
                 <Route  path='*' element={<ErrorScreen/>}/> 
              </Routes>
              
              </BrowserRouter>
            </main>
                
          </div>
  
  );
}

export default App;
