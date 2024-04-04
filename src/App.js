import "./App.css";

const users_list = [
  { name: "Stanisław", surname: "Skrzyśki" },
  { name: "Kinga", surname: "Kowalczyk" },
  { name: "Oliver", surname: "Szymański" },
];

function App() {
  return (
    <div className="App">
      {users_list.map((soldier) => {
        return (
          <div>
            {soldier.name} {soldier.surname}
          </div>
        );
      })}
    </div>
  );
}

export default App;
