import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  DownloadSimple,
  FilePdf,
  SpinnerGap,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { Assignment } from "../data/assignments";
import { assignments } from "../data/assignments";

type AssignmentViewerProps = {
  assignment: Assignment | null;
  onClose: () => void;
  onSelect: (assignment: Assignment) => void;
};

export function AssignmentViewer({ assignment, onClose, onSelect }: AssignmentViewerProps) {
  const [viewerState, setViewerState] = useState<{ id: number | null; loading: boolean; failed: boolean }>({
    id: null,
    loading: true,
    failed: false,
  });
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!assignment) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [assignment, onClose]);

  const currentIndex = assignment ? assignments.findIndex((item) => item.id === assignment.id) : -1;
  const loading = assignment ? viewerState.id !== assignment.id || viewerState.loading : false;
  const failed = assignment ? viewerState.id === assignment.id && viewerState.failed : false;
  const previous = currentIndex > 0 ? assignments[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < assignments.length - 1 ? assignments[currentIndex + 1] : null;

  return createPortal(
    <AnimatePresence>
      {assignment && (
        <motion.div
          className="viewer-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.section
            className="viewer-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="viewer-title"
            initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="viewer-topbar">
              <div className="viewer-heading">
                <span className="viewer-file-icon"><FilePdf weight="fill" /></span>
                <div>
                  <span>Bài {assignment.number}</span>
                  <h2 id="viewer-title">{assignment.title}</h2>
                </div>
              </div>
              <div className="viewer-top-actions">
                <button ref={closeButton} className="viewer-back-button" type="button" onClick={onClose}>
                  <ArrowLeft weight="bold" /> Tất cả bài tập
                </button>
                <button className="icon-button" type="button" onClick={onClose} aria-label="Đóng bài tập">
                  <X weight="bold" />
                </button>
              </div>
            </div>

            <div className="viewer-canvas">
              {loading && !failed && (
                <div className="viewer-state" aria-live="polite">
                  <SpinnerGap className="spin" weight="bold" />
                  <p>Đang mở trang giấy...</p>
                </div>
              )}
              {failed && (
                <div className="viewer-state viewer-error" role="alert">
                  <FilePdf weight="duotone" />
                  <p>Trình duyệt chưa thể hiển thị PDF này.</p>
                  <a className="button primary" href={assignment.viewerPath} target="_blank" rel="noreferrer">Mở trong tab mới</a>
                </div>
              )}
              <iframe
                key={assignment.id}
                className={loading || failed ? "pdf-frame is-loading" : "pdf-frame"}
                src={`${assignment.viewerPath}#view=FitH&toolbar=1`}
                title={`Xem ${assignment.title}`}
                onLoad={() => setViewerState({ id: assignment.id, loading: false, failed: false })}
                onError={() => {
                  setViewerState({ id: assignment.id, loading: false, failed: true });
                }}
              />
            </div>

            <div className="viewer-footer">
              <div className="viewer-meta">
                <strong>{assignment.originalFileName}</strong>
                <span>{assignment.fileType}, {assignment.fileSize}, {assignment.pages} trang</span>
              </div>
              <a className="button primary" href={assignment.downloadPath} download={assignment.originalFileName}>
                <DownloadSimple weight="bold" /> Tải xuống bài tập
              </a>
              <a className="viewer-open-link" href={assignment.viewerPath} target="_blank" rel="noreferrer">
                <ArrowSquareOut weight="bold" /> Mở tab mới
              </a>
              <div className="viewer-nav" aria-label="Chuyển bài tập">
                {previous && (
                  <button type="button" onClick={() => onSelect(previous)}>
                    <ArrowLeft /> Bài trước
                  </button>
                )}
                {next && (
                  <button type="button" onClick={() => onSelect(next)}>
                    Bài tiếp theo <ArrowRight />
                  </button>
                )}
                {!next && (
                  <Link className="viewer-summary-link" to="/summary" onClick={onClose}>
                    Đến Tổng kết <ArrowRight />
                  </Link>
                )}
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
