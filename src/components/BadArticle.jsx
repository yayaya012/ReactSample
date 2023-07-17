import {Content, Title} from './index'

const BadArticle = (props) => {
    return (
        <div>
            <div classname='flex__row'>
                <img src={'/logo192.png'} width={36} height={36} />
                <h2>{props.title}</h2>
            </div>
            <content content={props.content} />
        </div>

    )
}

export default BadArticle