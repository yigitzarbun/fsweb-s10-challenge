import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const INITIAL_LOAD = "INITIAL_LOAD";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(not) {
  return { type: NOT_SIL, payload: not };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        dispatch(notSil(res.data.json));
      }
    })
    .catch((error) => console.log(error));
};

export const getInitialData = () => {
  return { type: INITIAL_LOAD };
};
