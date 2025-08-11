type CommandEventListener = (command: string) => void

class CommandEventEmitter {
  private listeners: CommandEventListener[] = []

  emit(command: string) {
    this.listeners.forEach(listener => listener(command))
  }

  subscribe(listener: CommandEventListener) {
    this.listeners.push(listener)
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }
}

// Create singleton instance
export const commandEvents = new CommandEventEmitter()