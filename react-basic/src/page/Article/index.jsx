import {useParams} from "react-router-dom";

const Article = () => {
  // const [params] = useSearchParams()
  // const id = params.get('id')
  // const name = params.get('name')

  const params = useParams()
  return <div>I am article {params.id} {params.name}</div>
}

export default Article
