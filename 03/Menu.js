import React from "react"

class MenuElement extends React.Component {
    render() {
        const { text, url } = this.props
        return <li><a href={url}>{text}</a></li>
    }
}

export default MenuElement