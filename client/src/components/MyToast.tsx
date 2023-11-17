import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// eslint-disable-next-line react-refresh/only-export-components
const MySwal = withReactContent(Swal);

const myToast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  customClass: {
    container: "my-swal font-poppins text-lg",
    timerProgressBar: "bg-main",
  },
  timer: 5000,
  timerProgressBar: true,
  background: "#F8F9FC",
  color: "#000000",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

export default myToast;
