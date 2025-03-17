
// You do not have to make changes to this file!

const arr = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Pellentesque", "eu", "suscipit", "urna,", "at", "aliquam", "felis.", "Integer", "eu", "urna", "ornare,", "vehicula", "libero", "nec,", "sagittis", "felis.", "Aenean", "dapibus", "cursus", "erat", "at", "laoreet.", "Vivamus", "vel", "rhoncus", "ante.", "Maecenas", "in", "porttitor", "leo.", "Etiam", "mattis", "magna", "non", "nisi", "venenatis", "porta.", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra,", "per", "inceptos", "himenaeos.", "Donec", "ultricies", "enim", "vitae", "mi", "vestibulum", "convallis.", "Nulla", "eros", "enim,", "lacinia", "quis", "dictum", "et,", "ornare"];
window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('liveContent');
    setInterval(() => el.innerText = arr[Math.floor(Math.random() * arr.length)], 3000);
});
