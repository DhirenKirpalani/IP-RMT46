import Swal from 'sweetalert2';

export const errorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const successToast = (message) => {
  Toast.fire({
    icon: "success",
    title: message
  });
}