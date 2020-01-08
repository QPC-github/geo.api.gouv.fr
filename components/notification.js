import PropTypes from 'prop-types'

import {HelpCircle, AlertTriangle, Check, X} from 'react-feather'

import theme from '../styles/theme'

const types = {
  info: {icon: <HelpCircle />, title: 'Bon à savoir'},
  success: {icon: <Check />, title: 'Réussi'},
  warning: {icon: <AlertTriangle />, title: 'Attention'},
  error: {icon: <X />, title: 'Erreur'}
}

const Notification = ({message, type}) => (
  <div className={`notification ${type}`}>
    <h4><div className='icon'><div className='feather-icon'>{types[type].icon}</div></div> {types[type].title}</h4>
    {message}
    <style jsx>{`
      h4 {
        margin: 0.6em 0;
        display: flex;
        align-items: center;
      }

      .notification {
        color: ${theme.infoBorder};
        background: ${theme.infoBg};
        border: 1px solid ${theme.infoBorder};
        border-radius: ${theme.borderRadius};
        padding: 1em;
        margin-bottom: 1em;
        position: relative;
      }

      .notification.success {
        color: ${theme.successBorder};
        background: ${theme.successBg};
        border: 1px solid ${theme.successBorder};
      }

      .notification.warning {
        color: ${theme.warningBorder};
        background: ${theme.warningBg};
        border: 1px solid ${theme.warningBorder};
      }

      .notification.error {
        color: ${theme.errorBorder};
        background: ${theme.errorBg};
        border: 1px solid ${theme.errorBorder};
      }

      .icon {
        margin-right: 3px;
      }

      `}</style>
  </div>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.PropTypes.oneOf([
    'info', 'success', 'error', 'warning'
  ])
}

Notification.defaultProps = {
  type: 'info'
}

export default Notification
