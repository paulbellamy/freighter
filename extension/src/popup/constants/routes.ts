export enum ROUTES {
  debug = "/debug",
  welcome = "/",
  account = "/account",
  viewPublicKey = "/account/view-public-key",
  importAccount = "/account/import",
  accountHistory = "/account-history",
  sendPayment = "/account/sendPayment",
  sendPaymentTo = "/account/sendPayment/to",
  sendPaymentAmount = "/account/sendPayment/amount",
  sendPaymentType = "/account/sendPayment/amount/type",
  sendPaymentSettings = "/account/sendPayment/settings",
  sendPaymentSettingsFee = "/account/sendPayment/settings/fee",
  sendPaymentConfirm = "/account/sendPayment/confirm",
  addAccount = "/add-account",
  signTransaction = "/sign-transaction",
  grantAccess = "/grant-access",
  mnemonicPhrase = "/mnemonic-phrase",
  mnemonicPhraseConfirm = "/mnemonic-phrase/confirm",
  mnemonicPhraseConfirmed = "/mnemonic-phrase-confirmed",
  unlockAccount = "/unlock-account",
  accountCreator = "/account-creator",
  recoverAccount = "/recover-account",
  recoverAccountSuccess = "/recover-account-success",
  settings = "/settings",
  displayBackupPhrase = "/settings/display-backup-phrase",
  about = "/settings/about",
  preferences = "/settings/preferences",
  security = "/settings/security",
  manageAssets = "/manage-assets",
  addAsset = "/manage-assets/add-asset",
  trustlineError = "/manage-assets/trustline-error",
}
