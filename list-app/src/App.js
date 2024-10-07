import './App.css';
import StoreList from './components/StoreList';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E0F8EC', padding: '2rem' }}>
      <UserList />
      <br />
      <hr/>
      {/* 맛집 리스트 추가 두 개 정도만 미리 추가해 놓고, 추가할 수 있게 버튼 만들기. id, storeName, detail*/}
      {/* 월미당(쌀국수집) */}
      <StoreList />
    </div>
  );
}

export default App;
