// // Here we're trying to fetch any ID from the jsonplaceholder. You can do http://localhost:3000/post/1 or http://localhost:3000/post/11
// //and it'll display it for you
// 
// import { useRouter } from "next/router"
// import useSWR from 'swr'
// 
// export default function PostById() {
// 
//     const fetcher = (...args) => fetch(...args).then((res) => res.json());
// 
//     const router = useRouter();
//     const {id} = router.query;
// 
//     // user will have freedom of displaying the id that they wish to as I said in the 1st line
//     const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);
// 
//     if(error) return <div>Failed to Load</div>
//     if(!data) return <div>Loading...</div>
// 
//     // Here it'll return from hard coded path from Layout.js that we mentioned <Link href="/post/3">Post (3)</Link> | <Link href="/post/5">Post (5)</Link>
//     // It'll return post/3 and post/5
//     return (
//         <>
//             <strong>ID: </strong>{data?.id} <br />
//             <strong>UserId: </strong>{data?.userId} <br />
//             <strong>Title: </strong>{data?.title} <br />
//             <strong>Body: </strong>{data?.body} <br />
//         </>
//     )
// }



/**********************************************************************************************************************/


// Here we're Pre-Rendering and limiting the user choice option until id: 5

// UPDATES TO USE getStaticProps() & getStaticPaths()

// The idea here is, we're limiting the id's up to 5. Over 5 it'll give an 404 error
export async function getStaticPaths() {
    // pre-render and support post/1 through post/5 only
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } },
            { params: { id: "4" } },
            { params: { id: "5" } }
        ], fallback: false  // any pages not identified above, will result in a 404 error, ie post/6
    }
}


export async function getStaticProps(context) {
    // as you see here, we're passing context.params.id that we're limiting the id's as we did in getStaticPaths() function
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {props: {post: data}}
}

export default function RestrictedPostByIdUpToId5(props) {
    return (
        <>
            <strong>ID: </strong>{props.post?.id} <br />
            <strong>UserId: </strong>{props.post?.userId} <br />
            <strong>Title: </strong>{props.post?.title} <br />
            <strong>Body: </strong>{props.post?.body} <br />
        </>
    )
}