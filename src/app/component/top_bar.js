export default function Topbar({ 
    theme = "dark",
    leftText = "EVERYDAY, 10 AM - 8 PM",
    rightText = "PHOTOGRAPHY STUDIO",
    rightcontent = null
    }) {
    const color = theme === "dark" ? "#ffffff" : "#0A0A0A"
  
  return (
    <div className="flex justify-between items-center">
      <p className="b3" style={{ color }}>{leftText}</p>
      {rightcontent ? rightcontent : <p className="b3" style={{ color }}>{rightText}</p>}
    </div>
  )
}