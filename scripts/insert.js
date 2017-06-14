/**
 * Created by axetroy on 17-6-14.
 */
const fs = require('fs');

fs.readFile('./index.html', { encoding: 'utf8' }, function(err, content) {
  if (err) throw err;
  content = content.replace(
    `</body>`,
    `
<link rel="stylesheet" href="flex-grid.css">
<script src="main.js"></script>
</body>`
  );
  fs.writeFile('./dist/index.html', content, { encoding: 'utf8' }, function(
    err
  ) {
    if (err) throw err;
  });
});
