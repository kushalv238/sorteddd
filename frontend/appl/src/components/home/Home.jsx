import { useEffect } from "react";

import { useSelector } from "react-redux";

const Home = (props) => {
    const user = useSelector(state => state.user.userInfo);
    
    useEffect(() => {
		props.setOnPage(1)
	}, [props])

    return (
        <div>
            <h2>
                Home
            </h2>

            <p>
                {user?.displayName}
            </p>
        </div>
    )
}

export default Home