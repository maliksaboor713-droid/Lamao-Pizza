
'use client';
export default function Loading() {
  return (
    <main className="loading-page">
      <div className="loader-content">
        <div className="pizza">
          <div className="pizza-crust" />
          <div className="pizza-cheese">
            <span className="pepperoni p1" />
            <span className="pepperoni p2" />
            <span className="pepperoni p3" />
            <span className="pepperoni p4" />
            <span className="pepperoni p5" />
          </div>
        </div>

        <h1> Slice &amp; Serve </h1>
        <p>Preparing something delicious...</p>

        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      <style jsx>{`
        .loading-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 40%, #ff5a36 0%, transparent 28%),
            linear-gradient(135deg, #8b160e, #d72b16 55%, #ff6b35);
          color: white;
          overflow: hidden;
        }

        .loader-content {
          text-align: center;
          animation: fadeIn 0.8s ease-out;
        }

        .pizza {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 28px;
          transform: rotate(-12deg);
          animation: float 2s ease-in-out infinite;
        }

        .pizza-crust {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          background: #d98232;
          box-shadow:
            0 8px 0 #a9501e,
            0 14px 25px rgba(0, 0, 0, 0.25);
        }

        .pizza-cheese {
          position: absolute;
          inset: 18px;
          border-radius: 50%;
          background: #ffc83d;
          box-shadow: inset 0 0 0 5px #f5a623;
        }

        .pepperoni {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #d93625;
          border: 3px solid #b62218;
          box-shadow: inset 3px 3px 0 rgba(255, 255, 255, 0.12);
        }

        .p1 { top: 18px; left: 42px; }
        .p2 { top: 52px; right: 18px; }
        .p3 { bottom: 20px; left: 28px; }
        .p4 { bottom: 35px; right: 42px; }
        .p5 { top: 62px; left: 25px; }

        h1 {
          margin: 0;
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        p {
          margin: 8px 0 20px;
          color: #ffe1d7;
          font-size: 15px;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 7px;
        }

        .dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          animation: bounce 1.2s infinite ease-in-out;
        }

        .dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-12px) rotate(-6deg);
          }
        }

        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

