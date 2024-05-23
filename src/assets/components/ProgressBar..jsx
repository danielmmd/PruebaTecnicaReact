

export const ProgressBar = ({ totalFractions, soldFractions }) => {

    const percentage = (soldFractions / totalFractions) * 100;  
    const textColorClass = percentage > 30 ? 'progress-bar-text-white' : 'progress-bar-text-black';
    
  return (

    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <span className={`${textColorClass}`}>
            {percentage.toFixed(2)}
      </span>
    </div>
  );
  
}


