import { useRouter } from "next/router"

export default function ReadingQueryParamProducts() {

    const router = useRouter();
    const {page} = router.query;
    const {category} = router.query;

    if(page && category) {
        return (
            <>
                Products for page: {page} &amp; category: {category.join(', ')} 
            </>
        )
    } else {
        return (
            <>
                Page and category Parameter Required
            </>
        )
    }

    
}