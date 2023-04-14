import { useRouter } from 'next/router';  // we're using curly brackets bcz useRouter it's Not a default import export
import Link from 'next/link'  // we're using Link without curly brackets bcz Link it's a default import, export

export default function LayoutDynamic(props) {

    const router = useRouter();

    function goHome(e, msg) {
        console.log("Go home clicked from LayoutDynamic.js");
        console.log(msg);
        router.push('/');
    }

    return (
        <>
            <h3>Next.js Dynamic Routing Practice</h3>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/dashboard">Dashboard-(index)</Link> | <Link href="/dashboard/preferences">Dashboard-(Preferences)</Link>
            <hr />
            <br />
            {props.children}
            <br /><br />
            <hr />
            <button onClick={(e) => {goHome(e, "Navigating to home")}}>Home</button>
            <hr />
            Footer
        </>
    )
}