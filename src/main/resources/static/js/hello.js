(() => {
    const button = document.getElementById('hello-button');
    const result = document.getElementById('hello-result');

    if (!button || !result) return;

    button.addEventListener('click', async () => {
        result.textContent = '取得中...';
        try {
            const response = await fetch('/hello');
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const json = await response.json();
            const message = json?.message ?? 'no message';
            result.textContent = message;
        } catch (err) {
            console.error(err);
            result.textContent = '取得に失敗しました';
        }
    });
})();
