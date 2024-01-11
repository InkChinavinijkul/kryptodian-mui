import { CircularProgress } from '@mui/material'

const LoadingPage: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default LoadingPage
