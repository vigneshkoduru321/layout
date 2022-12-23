import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  console.log('haha')
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="container">
            {showLeftNavbar ? (
              <div className="left-con">
                <h1>Left Navbar Menu</h1>
                <ul>
                  <li>
                    <p>Item 1</p>
                  </li>
                  <li>
                    <p>Item 1</p>
                  </li>
                  <li>
                    <p>Item 1</p>
                  </li>
                  <li>
                    <p>Item 1</p>
                  </li>
                </ul>
              </div>
            ) : null}
            {showContent ? (
              <div className="content-con">
                <h1>Content</h1>
                <p>Lorem ipsum dolor sit amet,consecteur</p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="right-con">
                <h1>Right Navbar</h1>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            ) : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
