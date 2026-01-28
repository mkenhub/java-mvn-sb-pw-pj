document.addEventListener('DOMContentLoaded', () => {
    const helloButton = document.getElementById('hello-button');
    const helloResult = document.getElementById('hello-result');
    const confirmDialog = document.getElementById('confirm-dialog');
    const confirmOkButton = document.getElementById('confirm-ok');
    const confirmCancelButton = document.getElementById('confirm-cancel');

    if (helloButton) {
        helloButton.addEventListener('click', (event) => {
            event.preventDefault();
            // カスタムダイアログを表示
            if (confirmDialog) {
                confirmDialog.style.display = 'flex';
            }
        });
    }

    if (confirmOkButton) {
        confirmOkButton.addEventListener('click', async () => {
            // ダイアログを非表示
            if (confirmDialog) {
                confirmDialog.style.display = 'none';
            }

            // OKが押された場合、/helloを呼び出す
            try {
                const response = await fetch('/hello');
                const data = await response.json();
                if (helloResult) {
                    helloResult.textContent = data.message || data;
                }
            } catch (error) {
                console.error('Error fetching hello:', error);
                if (helloResult) {
                    helloResult.textContent = 'エラーが発生しました';
                }
            }
        });
    }

    if (confirmCancelButton) {
        confirmCancelButton.addEventListener('click', () => {
            // ダイアログを非表示（何もしない）
            if (confirmDialog) {
                confirmDialog.style.display = 'none';
            }
        });
    }
});
