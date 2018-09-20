const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// 最终的文件名
const filename = path.join(__dirname, 'dist', 'holidays.ics');

// 加载 event
async function loadEvent() {
    const node = [];
    const scanPattern = 'data/**.json';
    const files = glob.sync(scanPattern);
    for (let i = 0, l = files.length; i < l; i++) {
        const filePath = path.join(__dirname, files[i]);
        const json = await fs.readJson(filePath);
        
        json.forEach(item => {
            node.push('BEGIN:VEVENT');
            Object.entries(item).forEach(child => {
                const [ key, value ] = child;
                node.push(`${key}:${value}`);
            });
            node.push('SEQUENCE:0');
            node.push('END:VEVENT');
        });
        
    }
    return node;
}

// 输出文件
async function output(file) {
    let nodes = ['BEGIN:VCALENDAR'];
    nodes.push('VERSION:2.0');
    nodes.push('X-WR-CALNAME:法定节假日');
    nodes.push('X-WR-CALDESC:');
    nodes.push('X-APPLE-CALENDAR-COLOR:#65db39FF');

    // 追加 event
    const events = await loadEvent();
    nodes = nodes.concat(events);

    nodes.push('END:VCALENDAR');

    const content = nodes.join('\r\n');
    await fs.outputFile(file, content);
}

output(filename);