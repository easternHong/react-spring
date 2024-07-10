import {deleteCompleted} from "@/app/study/word/Server";

export default function Words(props: { props: Chengyu | undefined }) {
    return (
        <>
            <span>词汇量:${JSON.stringify(props.props?.explanation)}</span>

            <button onClick={deleteCompleted}>点击
            </button>
        </>
    )
}