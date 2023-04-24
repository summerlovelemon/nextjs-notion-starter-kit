import { useEffect } from "react";

const WalineComment = () => {
    useEffect(() => {
        const waline = require("waline");
        waline({
            el: "#waline-container",
            serverURL: "https://waline-1-e1869907.deta.app",
            pathname: window.location.pathname,
        });
    }, []);

    return (
        <div>
            <div id="waline-container"></div>
        </div>
    );
};

export default WalineComment;