import Article from './components/BadArticle'

function App() {
  return (
    <div>
      <Article
        title={'新・日本一わかりやすいReact入門講座'}
        content={'今日のトピックはpropsのデータの受け渡しについて'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門講座(Bad)'}
        content={'今日のトピックはuseEffectのデータの受け渡しについて'}
      />

    </div>
  ) 
}

export default App