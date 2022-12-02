import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';
import moment from 'moment';

export const downloadSinglePdf = async (url, name) => {
    fetch(url).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = name + '-Resume.pdf';
            alink.click();
        })
    })
};

const download = async url => {
    const resp = await fetch(url);
    return await resp.blob();
};

export const downloadByGroup = (urls, files_per_group = 5) => {
    return Promise.map(
        urls,
        async url => {
            return await download(url);
        },
        { concurrency: files_per_group }
    );
}

export const exportZip = (blobs, applicantNames, title) => {
    const zip = JsZip();
    blobs.forEach((blob, i) => {
        const applicantName = applicantNames[i];
        zip.file(`${applicantName}.pdf`, blob); // Archer 🎊 
    });

    zip.generateAsync({ type: 'blob' }).then(zipFile => {
        const currentDate = moment(new Date().getTime()).format('MMM Do YYYY')
        const fileName = `${title}-Applicants-${currentDate}.zip`;
        return FileSaver.saveAs(zipFile, fileName);
    });
}

export const downloadAndZip = async (data, title) => {
    const blobs = await downloadByGroup(data.urls, 5);
    return exportZip(blobs, data.names, title);
}

