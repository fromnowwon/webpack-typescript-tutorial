(()=>{"use strict";var __webpack_modules__={883:()=>{eval("\n;// CONCATENATED MODULE: ./src/forms.ts\nconst formData = (form) => {\n    const inputs = form.querySelectorAll('input');\n    let values = {};\n    inputs.forEach(input => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\n\n;// CONCATENATED MODULE: ./src/index.ts\n\nconst src_form = document.querySelector('form');\nsrc_form.addEventListener('submit', e => {\n    e.preventDefault();\n    const data = formData(src_form);\n    console.log(data);\n});\nfetch('/api/idol/V89FC7J-ATJ44KV-PW8MZMA-7GED4E6/monsta-x')\n    .then(res => res.json())\n    .then(data => {\n    console.log(data);\n})\n    .catch(error => {\n    console.log(error);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgzLmpzIiwibWFwcGluZ3MiOiI7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUNQbUM7QUFDbkMsTUFBTSxRQUFJO0FBQ1YsUUFBSTtBQUNKO0FBQ0EsaUJBQWlCLFFBQVEsQ0FBQyxRQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXByb2plY3QvLi9zcmMvZm9ybXMudHM/Y2NlYiIsIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcHJvamVjdC8uL3NyYy9pbmRleC50cz9lOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufTtcbiIsImltcG9ydCB7IGZvcm1EYXRhIH0gZnJvbSBcIi4vZm9ybXNcIjtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZm9ybURhdGEoZm9ybSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcbmZldGNoKCcvYXBpL2lkb2wvVjg5RkM3Si1BVEo0NEtWLVBXOE1aTUEtN0dFRDRFNi9tb25zdGEteCcpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG59KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///883\n")}},__webpack_exports__={};__webpack_modules__[883]()})();