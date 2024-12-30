import AnimatedOnScroll from "./components/AnimatedOnScroll";

const animations = [
  "animate-fadeIn",
  "animate-fadeOut",
  "animate-zoomIn",
  "animate-zoomOut",
  "animate-slideInLeft",
  "animate-slideInRight",
  "animate-slideInUp",
  "animate-slideInDown",
  "animate-bounceIn",
  "animate-rotateIn",
  "animate-flipInX",
  "animate-pulse",
  "animate-bounceOut",
  "animate-shake",
  "animate-swing",
  "animate-flipInY",
  "animate-zoomInDown",
  "animate-zoomOutDown",
  "animate-fadeInUp",
  "animate-fadeInDown",
  "animate-slideOutLeft",
  "animate-slideOutRight",
  "animate-slideOutUp",
  "animate-slideOutDown",
  "animate-rollIn",
  "animate-rollOut",
  "animate-fadeInLeft",
  "animate-fadeInRight",
  "animate-lightSpeedIn",
  "animate-lightSpeedOut",
  "animate-tada",
  "animate-bounceInDown",
  "animate-bounceInLeft",
  "animate-bounceInRight",
  "animate-flipOutX",
  "animate-flipOutY",
  "animate-zoomInLeft",
  "animate-zoomOutLeft",
  "animate-zoomInRight",
  "animate-zoomOutRight",
  "animate-fadeInZoom",
  "animate-fadeOutZoom",
  "animate-slideUp",
  "animate-slideDown",
  "animate-swingRight",
  "animate-swingLeft",
  "animate-fadeInRightBig",
  "animate-fadeOutLeftBig",
  "animate-flipOutUp",
  "animate-flipOutDown",
];

const Home = () => {
  return (
    <main className="flex items-center justify-center overflow-x-hidden">
      
      <div className="space-y-24 p-14">
        {animations.map((animation, index) => (
          <AnimatedOnScroll key={index} animation={animation}>
            <div
              className={`p-8 rounded-lg shadow-lg ${index % 5 === 0
                  ? "bg-teal-500 text-white"
                  : index % 5 === 1
                    ? "bg-blue-500 text-white"
                    : index % 5 === 2
                      ? "bg-green-500 text-white"
                      : index % 5 === 3
                        ? "bg-purple-500 text-white"
                        : "bg-red-500 text-white"
                }`}
            >
              <div className="text-center text-lg font-semibold">{animation}</div>
            </div>
          </AnimatedOnScroll>
        ))}
      </div>
    </main>
  );
};

export default Home;
