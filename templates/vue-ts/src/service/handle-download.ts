import { AxiosResponse } from 'axios'
import { handleErrors } from './handle-errors'

export const downloadFile = (response: AxiosResponse) => {
  const {
    headers: { "content-disposition": disposition },
    data: blob
  } = response;
  const reader = new FileReader();
  reader.onload = (e) => {
    const fileName = decodeURI(
      // 正则修改
      (disposition.match(/filename=(.*)/)[1] ?? '').replace(/['"]/g, '')
    );
    const elementA = document.createElement("a");
    elementA.download = fileName;
    elementA.href = e.target?.result as string;
    document.body.appendChild(elementA);
    elementA.click();
    document.body.removeChild(elementA);
  };
  reader.readAsDataURL(blob);
}
