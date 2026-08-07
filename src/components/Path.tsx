import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Location = {
    location: {
        pathname: string
    }
}

function Path({ location }: Location) {
    const paths = location.pathname.split("/").filter(Boolean);
    return (
        <>
            {paths.map((path, index) => {
                const capitalPath = path.charAt(0).toUpperCase() + path.slice(1);
                const href = "/" + paths.slice(0, index + 1).join("/");

                return (
                    <div key={index} className="flex justify-center items-center">
                        <ChevronRight size={14} />
                        <Link to={href}>{capitalPath}</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Path