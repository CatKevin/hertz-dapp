import React, { useEffect, Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from 'leek-uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
// import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Lottery = lazy(() => import('./views/Lottery'))
const Airdrop = lazy(() => import('./views/Airdrop'))
const Ifos = lazy(() => import('./views/Ifos'))
const Proposals = lazy(() => import('./views/Voting'))
const NotFound = lazy(() => import('./views/NotFound'))
const Assets = lazy(() => import('./views/Asset'))
const AssetsDeposit = lazy(() => import('./views/Asset/Components/Details/Deposit'))
const AssetsMonitor = lazy(() => import('./views/Asset/Components/Details/Monitor'))
const HertzTop = lazy(() => import('./views/Asset/Components/Details/HertzTop'))
const VaultSetup = lazy(() => import('./views/Asset/Components/Details/Vault'))
const VaultFees = lazy(() => import('./views/Asset/Components/Details/Fees'))
const VaultDeposits = lazy(() => import('./views/Asset/Components/Details/VaultDeposits'))
const VaultRedemption = lazy(() => import('./views/Asset/Components/Details/Redemption'))
const VaultAdvanced = lazy(() => import('./views/Asset/Components/Details/Advanced'))
const VaultReview = lazy(() => import('./views/Asset/Components/Details/Review'))
// const Exchange = lazy(() => import('./views/ComingSoon'))
// const Liquidity = lazy(() => import('./views/ComingSoon'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route strict path="/" exact>
              <Home />
            </Route>
            <Route strict path="/farms">
              <Farms />
            </Route>
            <Route path="/ido">
              <Ifos />
            </Route>
            <Route path="/vote">
              <Proposals />
            </Route>
            <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/airdrop">
              <Airdrop />
            </Route>
            <Route
              path="/assets"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Assets} exact />
                  <Route path={`${url}/deposit`} component={AssetsDeposit} exact />
                  <Route path={`${url}/monitor`} component={AssetsMonitor} exact />
                  <Route path={`${url}/hertzTop`} component={HertzTop} exact />
                  <Route path={`${url}/setup`} component={VaultSetup} exact />
                  <Route path={`${url}/setup/1`} component={VaultFees} exact />
                  <Route path={`${url}/setup/2`} component={VaultDeposits} exact />
                  <Route path={`${url}/setup/3`} component={VaultRedemption} exact />
                  <Route path={`${url}/setup/4`} component={VaultAdvanced} exact />
                  <Route path={`${url}/setup/5`} component={VaultReview} exact />
                </>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      {/* <NftGlobalNotification /> */}
    </Router>
  )
}

export default React.memo(App)
