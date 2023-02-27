# react 단어암기장

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. html, css

ui

### 2. react-router-dom

페이지 라우팅

### 3. dummy data

josn 더미 데이타를 만들어서 적용

### 4. dummy data

날짜별 링크

```
<Link to={`/word-list/${day.day}`} key={day.id}>
  {day.day} 일
</Link>
```

useParams 로 날짜 받기

```
<Route path="/word-list/:day" element={<WordList />} />
```

날짜별 데이타 출력

```
const d = useParams().day
const words = db.words.filter(word => word.day === Number(d))
```

### 5. 3001에 json server 실행

json 더미 데이타를 만들어서 적용

```
json-server --watch ./src/db/data.json --port 3001
```

### 6. custom hoook

useFetct

```
export default function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(item => setData(item))
  }, [url])

  return data
}
```

### 7. 단어추가, 날짜추가

fetch POST  
useRef  
useNavigate

단어 추가

### 9. 단어 삭제, 업데이트

fetch PUT  
fetch DELETE  
단어 삭제 후 화면 리렌더링
