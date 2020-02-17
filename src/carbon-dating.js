const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const t = Math.ceil(
    (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / 0.693) *
      HALF_LIFE_PERIOD
  );
  return isNaN(t) || !isFinite(t) || t < 0 ? false : t;
};
