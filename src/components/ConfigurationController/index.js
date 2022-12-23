import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = props => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="back">
          <h1>Layout</h1>
          <div>
            <input onChange={onChangeContent} type="checkbox" id="content" />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input onChange={onChangeLeft} type="checkbox" id="left" />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div>
            <input onChange={onChangeRight} type="checkbox" id="right" />
            <label htmlFor="right">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
