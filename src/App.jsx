import ExpenseTracker from "./Components/ExpenseTracker";
import Attribution from "./Components/attribution";

const App = () => {

return (
<main className="w-auto h-screen bg-[#f9ece1] flex flex-col items-center justify-center">

<ExpenseTracker />
<Attribution />

</main>
)
}
export default App;