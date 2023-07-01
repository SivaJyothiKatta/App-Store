// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    setActiveTabId(tabId)
  }

  const tabsActive = isActive ? `tab-button active` : `tab-button`

  return (
    <li className="tab-list">
      <button type="button" onClick={onClickButton} className={tabsActive}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
