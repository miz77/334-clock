// ツールバーの拡張機能アイコンがクリックされたときの処理
chrome.action.onClicked.addListener((tab) => {
  // サイドパネル機能が利用可能か確認
  if (chrome.sidePanel) {
    // 現在のウィンドウでサイドパネルを開閉する
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});