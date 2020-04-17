# 외부 API를 연동하여 뉴스 뷰어 만들기

## 전 세계의 뉴스를 찾아볼 수 있는 News API

https://newsapi.org/s/south-korea-news-api

<br>

### API를 요청할 때 주의할 점

- 컴포넌트가 화면에 보이는 시점에 API를 요청할 때 useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청하면 된다.<br>
  여기서 주의해야 할 점은 useEffect에 등록하는 함수에 async를 붙이면 안 된다. useEffect에서 반환해야 하는 값은<br>
  뒷정리 함수이기 때문이다. 따라서 useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은<br>
  또 다른 함수를 만들어서 사용해야 한다.

- 데이터를 불러와서 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때 반드시 !aricles를 조회하여<br>
  해당 값이 현재 null 이 아닌지 검사해야 한다. 데이터가 유효하지 않다면, null 에는 map 함수가 없기 때문에 렌더링 과정에서<br>
  오류가 발생하여 빈 화면만 보이게 된다

```jsx
// 아직 articles 값이 설정되지 않았을 때 (map 함수 사용하기 전 검사)
if (!articles) {
  return null;
}
```
